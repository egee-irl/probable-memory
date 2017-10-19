require 'shoes'

Shoes.app width: 320, height: 320 do

  stack(margin: 8) do
    # button 'Button 1' do background "#F3F".."#F90" end
    # button 'Button 2' do puts 'click!' end
    # button 'Button 3' do alert 'Nice click!' end
      button 'Commander Keen 4' do `dosbox "/home/egee/.dosgames/Commander Keen - Keen Dreams/keend/START.EXE" -exit -fullscreen` end
  end
end