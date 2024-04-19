import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/db/schema";

const psql = neon(process.env.NEON_URL!);

const db = drizzle(psql, { schema });

const main = async () => {
    try {
        console.log("Seeding database...");

        // Delete all records in the tables
        await db.delete(schema.challenges);
        await db.delete(schema.lessons);
        await db.delete(schema.units);
        await db.delete(schema.challengesOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);

        // Insert records into the tables
        await db.insert(schema.courses).values([
            { id: 1, title: "Spanish", imageSrc: "/assets/flags/es.svg" },
            { id: 2, title: "French", imageSrc: "/assets/flags/fr.svg" },
            { id: 3, title: "German", imageSrc: "/assets/flags/de.svg" },
            { id: 4, title: "Italian", imageSrc: "/assets/flags/jp.svg" },
            { id: 5, title: "Portuguese", imageSrc: "/assets/flags/br.svg" },
            { id: 6, title: "English", imageSrc: "/assets/flags/uk.svg" },
        ]);

        await db.insert(schema.units).values([{
            id: 1,
            courseId: 1,
            title: "Unit 1",
            description: "Unit 1 description",
            order: 1
        }]);

        await db.insert(schema.lessons).values([{
            id: 1,
            unitId: 1,
            title: "Lesson 1",
            order: 1
        }]);

        await db.insert(schema.lessons).values([{
            id: 2,
            unitId: 1,
            title: "Lesson 2",
            order: 2
        }]);

        await db.insert(schema.challenges).values([{
            id: 1,
            lessonId: 1,
            type: "SELECT",
            question: "What is the capital of Spain?",
            order: 1
        }]);

        await db.insert(schema.challenges).values([{
            id: 2,
            lessonId: 2,
            type: "ASSIST",
            question: "Translate 'the man' to Spanish",
            order: 2
        }]);

        await db.insert(schema.challengesOptions).values([{
            id: 1,
            challengeId: 1,
            text: "Madrid",
            isCorrect: true
        }]);

        await db.insert(schema.challengesOptions).values([{
            id: 2,
            challengeId: 1,
            text: "Barcelona",
            isCorrect: false
        }]);

        await db.insert(schema.challengesOptions).values([{
            id: 3,
            challengeId: 1,
            text: "Seville",
            isCorrect: false
        }]);

        await db.insert(schema.challengesOptions).values([{
            id: 4,
            challengeId: 2,
            text: "El robot",
            audioSrc: "/assets/app/es_robot.mp3",
            isCorrect: false
        }]);

        await db.insert(schema.challengesOptions).values([{
            id: 5,
            challengeId: 2,
            text: "El hombre",
            audioSrc: "/assets/app/es_man.mp3",
            isCorrect: true
        }]);

        await db.insert(schema.challengesOptions).values([{
            id: 6,
            challengeId: 2,
            text: "La mujer",
            audioSrc: "/assets/app/es_woman.mp3",
            isCorrect: false
        }]);
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed database");
    }
}

main();
