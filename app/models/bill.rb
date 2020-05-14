# frozen_string_literal: true

class Bill < ApplicationRecord
  require 'date'
  belongs_to :user
  belongs_to :patient
  has_many :samples, dependent: :destroy

  default_scope { order(created_at: :desc) }

  def self.create(user, unique_id, patient_id)
    name = "#{DateTime.now}-#{unique_id}".to_s
    @bill = user.bills.build(name: name, patient_id: patient_id)
    @bill
  end
end
