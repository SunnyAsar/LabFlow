# frozen_string_literal: true

class AddSamplesCounterToPatient < ActiveRecord::Migration[6.0]
  def change
    add_column :patients, :samples_count, :integer, default: 0

    Patient.find_each { |p| Patient.reset_counters(p.id, :samples_count) }
  end
end
