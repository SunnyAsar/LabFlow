# frozen_string_literal: true

class Sample < ApplicationRecord
  default_scope-> { order(created_at: :desc) }

  belongs_to :patient
  belongs_to :user
  belongs_to :test

  enum status: %i[taken processing ready collected]
end
