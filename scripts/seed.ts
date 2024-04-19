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

        console.log("Seeding finished")
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed database");
    }
}

main();
