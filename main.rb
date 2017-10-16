require 'shoes'

Shoes.app width: 640, height: 320 do

  stack(margin: 8) do
    button 'Button 1' do background "#F3F".."#F90" end
    button 'Button 2' do puts 'click!' end
    button 'Button 3' do alert 'Nice click!' end
  end
end