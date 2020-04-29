# frozen_string_literal: true

class Patient < ApplicationRecord
  belongs_to :user
  has_many :samples

  default_scope { order(created_at: :desc) }

  validates :first_name, :last_name, :phone, presence: true
end
