"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(13,19,37)'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  backButton: {
    position: 'absolute',
    left: 10,
    bottom: 0,
    zIndex: 1
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    paddingTop: 10,
    color: '#fff',
    textAlign: 'center'
  },
  listContainer: {
    paddingLeft: 16,
    paddingRight: 16
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(37,44,62)'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  nameContainer: {
    flex: 1
  },
  nameText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff'
  },
  symbolText: {
    fontSize: 14,
    color: '#fff',
    marginRight: 8
  }
});
var _default = exports.default = styles;
//# sourceMappingURL=styles.js.map