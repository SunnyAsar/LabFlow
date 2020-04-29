class Test < ApplicationRecord
  belongs_to :user
  belongs_to :patient
  has_many :samples

  default_scope { order(created_at: :desc)}
end
