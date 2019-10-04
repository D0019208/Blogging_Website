<?php

/* * ************************ You need to set the values below to match your project ************************ */
$GLOBALS['user_liked'] = false;
// mysql-d00192082.alwaysdata.net website and mysql-d00192082.alwaysdata.net database
try {


    $localHostSiteFolderName = "AndreaWebsite";

    $localhostDatabaseName = "d00192082_blogusers";
    $localHostDatabaseHostAddress = "mysql-d00192082.alwaysdata.net";
    $localHostDatabaseUserName = "d00192082";
    $localHostDatabasePassword = "3820065Np2";



// remotely hosted website and remotely hosted database       /* you will need to get the server details below from your host provider */
    $serverWebsiteName = "http://students.ie/D00123456"; /* use this address if hosting website on the college students' website server */

    $serverDatabaseName = "D00123456";
    $serverDatabaseHostAddress = "mysql02.comp.dkit.ie";         /* use this address if hosting database on the college computing department database server */
    $serverDatabaseUserName = "D00123456";
    $serverDatabasePassword = "ABCD";




    $useLocalHost = true;      /* set to false if your database is NOT hosted on mysql-d00192082.alwaysdata.net */



    /*     * ******************************* WARNING                                 ******************************** */
    /*     * ******************************* Do not modify any code BELOW this point ******************************** */

    if ($useLocalHost == true) {
        $siteName = "http://mysql-d00192082.alwaysdata.net/" . $localHostSiteFolderName;
        $dbName = $localhostDatabaseName;
        $dbHost = $localHostDatabaseHostAddress;
        $dbUsername = $localHostDatabaseUserName;
        $dbPassword = $localHostDatabasePassword;
    } else {  // using remote host
        $siteName = $serverWebsiteName;
        $dbName = $serverDatabaseName;
        $dbHost = $serverDatabaseHostAddress;
        $dbUsername = $serverDatabaseUserName;
        $dbPassword = $serverDatabasePassword;
    }
    
    
} catch (Exception $ex) {
    $_SESSION["error_message"] = $ex->getMessage();
    header("location: index.php");
    exit();
}
?>