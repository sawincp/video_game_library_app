class GenreSerializer < ActiveModel::Serializer
  attributes :id, :genre_type

  has_many :games
  has_many :users, through: :games
  has_many :consoles, through: :games
end
