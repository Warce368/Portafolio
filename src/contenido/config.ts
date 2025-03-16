import { defineCollection,z } from "astro:content";

const proyectos  = defineCollection({
    schema: z.object({
        titulo: z.string(),
        descripcion: z.string(),


    })

})

export const collections = {proyectos}