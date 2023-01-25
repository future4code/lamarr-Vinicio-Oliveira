import { MovieDatabase } from "../data/MovieDatabase";
import { createMovieDTO } from "../model/createMovieDTO";
import { CustomError } from "../error/CustomError";
import { generateId } from "../services/idGenerated";
import { InvalidDuration } from "../error/MovieErrors";

export class MovieBusiness {
    public create = async (input: createMovieDTO) => {
        try {

            const movieDatabase = new MovieDatabase()
            const { title, description, duration_in_minutes, year_of_release } = input

            if (!title || !description || !duration_in_minutes || !year_of_release) {
                throw new CustomError(400, "Dados inválidos!");
            }

            if (duration_in_minutes < 100) {
                throw new InvalidDuration();
            }

            const id: string = generateId()


            const movie = {
                id,
                title,
                description,
                duration_in_minutes,
                year_of_release
            };

            await movieDatabase.create(movie)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }
}