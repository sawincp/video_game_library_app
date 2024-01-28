class ConsolesController < ApplicationController

    def index
        return json: Console.all
    end
end
