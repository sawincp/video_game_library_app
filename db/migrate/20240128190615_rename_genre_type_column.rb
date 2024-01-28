class RenameGenreTypeColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :genres, :type, :genre_type
  end
end
