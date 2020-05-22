class Api::DasboardController < ApplicationController
  def index
    @bills = Bill.count
    @patients = Patient.count
    @samples = Sample.count
    @tests = Test.count
  end
end
