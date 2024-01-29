class GenresController < ApplicationController

    before_action :authorize, except: [:index]

    def index
        render json: Genre.all
    end

end
