class ConsolesController < ApplicationController

    before_action :authorize, except: [:index]
    
    def index
        render json: Console.all
    end

    def create
        console = Console.create!(console_params)
        render json :console, status: :created
    end

    private

    def console_params
        params.require(:console).permit(:platform)
    end
    
end
