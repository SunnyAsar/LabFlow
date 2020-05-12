# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  enum gender: %i[male female]
  enum status: %i[active suspended leave termainated]

  has_many :patients
  has_many :tests
  has_many :samples
  has_many :bills

  def full_name
    "#{first_name} #{last_name}"
  end
end
