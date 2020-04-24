class CreateSamples < ActiveRecord::Migration[6.0]
  def change
    create_table :samples, id: :uuid do |t|
      t.string :name, null: false
      t.string :sample_id, null: false
      t.integer :amount, default: 0
      t.references :patient, type: :uuid, null: false, foreign_key: true
      t.references :user, type: :uuid, null: false, foreign_key: true
      t.references :test, type: :uuid, null: false, foreign_key: true
      t.integer :status

      t.timestamps
    end
  end
end
