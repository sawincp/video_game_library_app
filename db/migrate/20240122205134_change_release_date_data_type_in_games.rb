class ChangeReleaseDateDataTypeInGames < ActiveRecord::Migration[6.1]
  def change
    change_column :games, :release_date, :date
  end
end
