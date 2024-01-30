class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :cover_art, :release_date, :notes, :user_id, :console_id, :genre_id

  belongs_to :user
  belongs_to :console
  belongs_to :genre
end
