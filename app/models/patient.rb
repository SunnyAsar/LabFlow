class Patient < ApplicationRecord
  belongs_to :user
  has_many :samples

  validates :first_name, :last_name, :phone, presence: true
end
