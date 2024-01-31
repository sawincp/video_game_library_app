class GamesController < ApplicationController

    before_action :authorize_note_user, only: [:update, :destroy]

    def index
        render json: Game.all
    end

    def create
        game = @current_user.games.create!(game_params)
        # game = Game.create!(game_params)
        render json: game
    end

    def update
        note = @current_user.games.find(params[:id])
        if note.update(game_params)
            render json: note
        else
            render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        note = @current_user.games.find(params[:id])
        note.destroy
        head :no_content    
    end

    private

    def game_params
        params.require(:game).permit(:title, :cover_art, :release_date, :notes, :user_id, :console_id, :genre_id)
    end

    def authorize_note_user
        note = Game.find(params[:id])
        render json: { error: 'Unauthorized' }, status: :unauthorized unless @current_user === note.user
    end

end
