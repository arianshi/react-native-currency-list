declare const styles: {
    container: {
        flex: number;
        backgroundColor: string;
    };
    header: {
        flexDirection: "row";
        alignItems: "center";
        justifyContent: "center";
        marginBottom: number;
    };
    backButton: {
        position: "absolute";
        left: number;
        bottom: number;
        zIndex: number;
    };
    titleWrapper: {
        flex: number;
        alignItems: "center";
    };
    title: {
        fontSize: number;
        fontWeight: 600;
        paddingTop: number;
        color: string;
        textAlign: "center";
    };
    listContainer: {
        paddingLeft: number;
        paddingRight: number;
    };
    itemContainer: {
        flexDirection: "row";
        alignItems: "center";
        paddingVertical: number;
        borderBottomWidth: number;
        borderBottomColor: string;
    };
    avatar: {
        width: number;
        height: number;
        borderRadius: number;
        backgroundColor: string;
        justifyContent: "center";
        alignItems: "center";
        marginRight: number;
    };
    avatarText: {
        color: string;
        fontWeight: "bold";
        fontSize: number;
    };
    nameContainer: {
        flex: number;
    };
    nameText: {
        fontSize: number;
        fontWeight: "500";
        color: string;
    };
    symbolText: {
        fontSize: number;
        color: string;
        marginRight: number;
    };
};
export default styles;
