<?php
    namespace ThemeTools\API;
    use ThemeTools\Cookies;
    
    class APICache {
        private static $instances = [];
        private $cookies;
        private $target_name;
        
    /**
      * Fetch
      * 
      * Fetch data using an API 
      *
      * @param string $target_name - target api name
      * @param string $test_name - test name
      * @param string $params - parameters
      *   
      * @return false if failed, object on success
      **/
        
        public static function Fetch( string $target_name, string $fetch_name, array $params = [] ) {
            return self::getInstance( $target_name )->FetchCache( $fetch_name, $params );
        }
        
    /**
      * Remove
      * 
      * Remove cache for a fetch
      *
      * @param string $target_name - target api name
      * @param string $test_name - test name
      * @param string $params - parameters
      *   
      * @return false if failed, object on success
      **/
        
        public static function Remove( string $target_name, string $fetch_name, array $params = [] ) {
            return self::getInstance( $target_name )->FetchCacheRemove( $fetch_name, $params );
        }
        
    /**
      * getInstance TARGET_NAME
      * 
      * Creates a cache for a specific target
      *
      * @param string $target_name - target api name
      *   
      * @return Cache - The cache object
      **/
        
        public static function getInstance( string $target_name ) : APICache {
            if( !isset( self::$instances[ $target_name ] ) )
                self::$instances[ $target_name ] = new APICache( $target_name );
            return self::$instances[ $target_name ];
        }
        
    /**
      * getInstance TARGET_NAME
      * 
      * Construct a cache for a specific target
      *
      * @param string $target_name - target api name
      *   
      * @return null
      **/
        
        private function __construct( string $target_name ) {
            $this->cookies = Cookies::getInstance();
            $this->target_name = $target_name;
        }
        
    /**
      * FetchCache
      * 
      * FetchCache data using an API 
      *
      * @param string $fetch_name - fetch name
      * @param string $params - parameters
      *   
      * @return false if failed, object on success
      **/
        
        public function FetchCache( string $fetch_name, array $params = [] ) {
            $key = 'apicache.'.md5( serialize( [ $this->target_name, $fetch_name, $params ] ) );

            if( $this->cookies->get( $key ) === false ) 
                $this->cookies->set( $key, serialize( API::Fetch( $this->target_name, $fetch_name, $params ) ) );
            
            return unserialize( $this->cookies->get( $key ) );
        }
        
    /**
      * FetchCacheRemove
      * 
      * Remove Fetch Cache data
      *
      * @param string $fetch_name - fetch name
      * @param string $params - parameters
      *   
      * @return null
      **/
        
        public function FetchCacheRemove( string $fetch_name, array $params = [] ) {
            $key = 'apicache.'.md5( serialize( [ $this->target_name, $fetch_name, $params ] ) );

            $this->cookies->remove( $key );
        }
        
        
    }
