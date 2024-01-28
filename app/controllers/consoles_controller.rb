class ConsolesController < ApplicationController

    def index
        render json: Console.all
    end
end
