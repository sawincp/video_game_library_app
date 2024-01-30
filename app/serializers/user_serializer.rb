class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :games, :consoles, :genres

  has_many :games
  has_many :consoles, through: :games
  has_many :genres, through: :games
end
