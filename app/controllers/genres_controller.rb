class GenresController < ApplicationController

    before_action :authorize, except: [:index]

    def index
        render json: Genre.all
    end

    def create
        genre = Genre.create!(genre_params)
        render json: genre, status: :created
    end

    private

    def genre_params
        params.require(:genre).permit(:genre_type)
    end

end
