import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectColors } from '../../redux/colors/color.selectors';
import { enqueColor } from '../../redux/colors/color.actions';

import {
  MainPageContainer,
  MainContentContainer,
  SquaresContainer,
  HeaderFooterContainer,
  CustomButton,
  Square
} from './main.styles';

const MainPage = ({ colors, enqueColor }) => (
  <MainPageContainer>
    <HeaderFooterContainer>
      <CustomButton onClick={() => enqueColor('coral')} color='coral'>
        coral
      </CustomButton>
      <CustomButton onClick={() => enqueColor('chartreuse')} color='chartreuse'>
        chartreuse
      </CustomButton>
    </HeaderFooterContainer>

    <MainContentContainer>
      <SquaresContainer>
        {colors.map((color, index) => (
          <Square color={() => color}>{index}</Square>
        ))}
      </SquaresContainer>
    </MainContentContainer>

    <HeaderFooterContainer>
      <CustomButton onClick={() => enqueColor('goldenrod')} color='goldenrod'>
        goldenrod
      </CustomButton>
      <CustomButton onClick={() => enqueColor('lightskyblue')} color='lightskyblue'>
        lightskyblue
      </CustomButton>
    </HeaderFooterContainer>
  </MainPageContainer>
);

const mapStateToProps = createStructuredSelector({
  colors: selectColors
});

const mapdispatchToProps = dispatch => ({
  enqueColor: newColor => dispatch(enqueColor(newColor))
});

export default connect(mapStateToProps, mapdispatchToProps)(MainPage);
