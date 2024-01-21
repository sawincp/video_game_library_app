class Game < ApplicationRecord
 belongs_to :user
 belongs_to :console
 belongs_to :genre
end