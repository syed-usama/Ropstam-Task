import {StyleSheet} from 'react-native';
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
    main:{
        marginTop:-1,
        backgroundColor: 'white',
        height:hp(86),
      paddingHorizontal:wp(3),
    },
    mainx:{
      backgroundColor: 'white',
        height:hp(4),
        borderTopLeftRadius: 40,
      borderTopRightRadius:40,
    },
    backButton:{
        marginLeft: 10,
        marginTop: 25,
    },
    header: {
        height:hp(10),
        backgroundColor:colors.primary,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop:hp(3),
      },
      headerText:{
        marginLeft:-wp(10),
        fontWeight:'600',
        fontSize:22,
        color : "white",
        fontWeight:'600'
      },
    footer: {
        justifyContent: 'flex-end',
        marginVertical: 20,
    },
    sheetContainer:{
        paddingBottom:20,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:10
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
itemWrapper1:{
    height:180,
    width:wp(45),
    marginHorizontal:wp(2.5),
    elevation:3,
    borderRadius:5,
    paddingVertical:15,
    marginTop:10,
},

sheetItem1:{
    fontFamily:'Axiforma-Regular',
    fontSize:16,
    textAlign:'center',
    color : "black",
},
sheetItem2:{
    fontFamily:'Axiforma-Regular',
    fontSize:12,
    fontWeight:'600',
    color : "black",
    marginLeft:10,
},
sheetItem3:{
    fontFamily:'Axiforma-Regular',
    fontSize:12,
    color : "black",
    textAlign:'center',
},

checkIcon1:{
    position:'absolute',
    right:12,
    top:13,
    paddingTop:1,
    backgroundColor:'#3ce630',
    borderRadius:10,
    borderWidth:1,
    borderColor:'grey'
},
error: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: '400',
    fontSize: 12,
    marginLeft: wp(6),
    marginTop: 2,
    color: 'red',
  },

});
