class ConsoleSerializer < ActiveModel::Serializer
  attributes :id, :platform

  has_many :games
  has_many :users, through: :games
  has_many :genres, through: :games
end
