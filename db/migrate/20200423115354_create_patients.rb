class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients, id: :uuid do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :middle_name, default: ''
      t.string :email
      t.string :phone, null: false
      t.string :pid, unique: true
      t.text :contact_address
      t.references :user, type: :uuid, null: false, foreign_key: true

      t.timestamps
    end
  end
end
