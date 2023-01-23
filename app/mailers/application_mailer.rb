# frozen_string_literal: true

# class createMessages.rb
class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'
end
