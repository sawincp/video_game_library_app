class ChangeNullValuesInGames < ActiveRecord::Migration[6.1]
  def change
    change_column_null :games, :user_id, true  # Allow user_id to be null
    change_column_null :games, :console_id, true  # Allow console_id to be null
    change_column_null :games, :genre_id, true  # Allow genre_id to be null
  end
end
