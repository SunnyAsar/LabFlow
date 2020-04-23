class Sample < ApplicationRecord
  belongs_to :patient
  belongs_to :user
  belongs_to :test

  enum status: [:taken, :processing, :ready, :collected]
end
