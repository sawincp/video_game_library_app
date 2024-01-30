class GamesController < ApplicationController

    before_action :authorize, except: [:index]

    def index
        render json: Game.all
    end

    def create
        game = @current_user.games.create!(game_params)
        # game = Game.create!(game_params)
        render json: game
    end

    private

    def game_params
        params.require(:game).permit(:title, :cover_art, :release_date, :notes, :user_id, :console_id, :genre_id)
    end

end
