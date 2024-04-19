'use server';

import { auth, currentUser } from "@clerk/nextjs";
import { getCouseById, getUserProgress } from "@/db/queries";
import db from "@/db/drizzle";
import { userProgress } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
        return new Error("Unauthorized");
    }

    const course = await getCouseById(courseId);

    if (!course) {
        return new Error("Course not found");
    }

    // TODO: Enable once units and lessons are added into the db
    // if (!course.units.length || !course.units[0].lessons.length) {
    //     return new Error("Course is empty");
    // }

    const existingUserProgress = await getUserProgress();

    if (existingUserProgress) {
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/mascot.svg",
        })

        revalidatePath("courses");
        revalidatePath("learn");
        redirect("/learn");
    }

    await db.insert(userProgress).values({
        userId,
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg",
    });

    revalidatePath("courses");
    revalidatePath("learn");
    redirect("/learn");
}