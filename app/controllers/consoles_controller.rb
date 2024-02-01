class ConsolesController < ApplicationController

    before_action :authorize, except: [:index]
    
    def index
        render json: Console.all
    end
    
end
