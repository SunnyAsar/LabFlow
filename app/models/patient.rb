# frozen_string_literal: true

class Patient < ApplicationRecord
  belongs_to :user
  has_many :samples

  default_scope { order(created_at: :desc) }

  validates :first_name, :last_name, :phone, presence: true

  def full_name
    "#{first_name} #{last_name} #{middle_name}"
  end
end
