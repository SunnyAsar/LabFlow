# frozen_string_literal: true

class Test < ApplicationRecord
  belongs_to :user
  has_many :samples

  default_scope { order(created_at: :desc) }
end
