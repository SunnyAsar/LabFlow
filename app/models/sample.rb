# frozen_string_literal: true

class Sample < ApplicationRecord
  default_scope-> { order(created_at: :desc) }

  belongs_to :patient, counter_cache: true
  belongs_to :user
  belongs_to :test

  enum status: %i[taken processing ready collected]

  def add_sample(patient_id)
    @sample = self
    @sample.amount = sample_amount(self[:test_id])
    @sample.patient_id = patient_id
    @sample.sample_id = SecureRandom.alphanumeric(8)
    @sample.status = 0
    @sample
  end

  private

  def sample_amount(data)
    Test.find(data).amount
  end
end
