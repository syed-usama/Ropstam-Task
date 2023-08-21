import {StyleSheet,Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../Assets/colors/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  linearGradient: {
    flex: 1,
  },
  header: {
    flex:1,
    // justifyContent: "center",
    flexDirection: 'row',
    alignItems: 'center',
  },
  selector:{
    position:'absolute',
    borderColor:'white',
    borderWidth:0.5,
    padding:2,
    paddingHorizontal:4,
    alignItems:'center',
    flexDirection:'row'
  },
  username: {
    flex:3,
    fontFamily: 'Axiforma-Regular',
    fontWeight: '700',
    fontSize: 15,
    color: 'white',
    marginLeft:5,

    },
  leftIcons: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: 16,
  },
  notification: {
      height: 24,
      width: 24,
      marginRight:10,
  },
  body:{
      flex: 7,
      backgroundColor: "white",
      borderTopLeftRadius: 40,
      borderTopRightRadius:40,
      paddingHorizontal: 20,
      paddingTop:hp(3)
  },
  row:{
    marginTop:hp(4),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:wp(2),
  },
  card:{
    marginTop:hp(4),
    alignSelf:'center',
    paddingHorizontal:wp(4),
    flexDirection:'row',
    alignItems:'center',
    height:wp(34),
    width:wp(80),
    backgroundColor:colors.primary,
    borderRadius:14
  },
  cardText:{
    fontSize:18,
    fontWeight:'500',
    color:'white',
    // marginLeft:8,
    width:wp(60),
    textAlign:'center',
  },
  footer:{
    position:'absolute',
    bottom:30,
    alignSelf:'flex-end',
    paddingRight:wp(8),
    // width:wp(80)
  },
  badgeIconView:{
    position:'relative',
    padding:6
  },
  badge:{
    color:'#fff',
    position:'absolute',
    top:1,
    right:1,
    fontSize:12,
  },
  addButton:{
    height:wp(16),
    width:wp(16),
    borderRadius:wp(8),
    backgroundColor:colors.primary,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end'
  },
  sheetContainer:{
    paddingBottom:20,
    borderWidth:1,
    borderColor:'grey',
    borderRadius:10
},
checkIcon:{
    position:'absolute',
    right:30,
    top:15,
    paddingTop:1,
    backgroundColor:'#3ce630',
 borderRadius:10,
 borderWidth:1,
borderColor:'grey'
},
line:{
    marginTop:5,
    backgroundColor:'grey',
    height:8,
    width:80,
    alignSelf:'center',
    borderRadius:5,
},
title:{
    textAlign:'center',
    paddingVertical:20,
    fontFamily:'Axiforma-Regular',
    fontSize:22,
    color : "black"
},
sheet1:{
    justifyContent:'space-evenly',
},
itemWrapper:{
    alignItems:'center',
    paddingVertical:15,
},
sheetItem:{
    fontFamily:'Axiforma-Regular',
    fontSize:18,
    color : "black"
},
});
