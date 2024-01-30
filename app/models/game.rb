class Game < ApplicationRecord
    belongs_to :user
    belongs_to :console 
    belongs_to :genre

    validates :title, :cover_art, :release_date, presence: true
    validates :title, uniqueness: { message: 'Already Exists' }
end