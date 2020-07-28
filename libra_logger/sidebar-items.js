initSidebarItems({"constant":[["CHANNEL_SIZE",""],["DEFAULT_TARGET",""]],"enum":[["Level","An enum representing the available verbosity levels of the logger."]],"fn":[["init_file_struct_log","Initializes struct logger sink that writes to specified file. Can only be called once"],["init_println_struct_log","Initialize struct logger sink that prints all structured logs to stdout Can only be called once"],["init_struct_log_from_env","Initializes struct logger from STRUCT_LOG_FILE env var. If STRUCT_LOG_FILE is set, STRUCT_LOG_TCP_ADDR will be ignored. Can only be called once"],["set_struct_logger","Sets structured logger"],["struct_logger_enabled","Checks if structured logging is enabled for level"],["struct_logger_set","Checks if structured logging is enabled"]],"macro":[["crit","Define crit macro that specify libra as the target"],["debug","Define debug macro that specify libra as the target"],["error","Define  macro that specify libra as the target"],["event","Writes event to event stream Example:   event!(\"committed\", block=\"b\");"],["format_index",""],["format_struct_arg",""],["format_struct_args",""],["format_struct_args_and_pattern",""],["git_rev",""],["info","Define info macro that specify libra as the target"],["location",""],["send_struct_log",""],["struct_log",""],["struct_log_enabled",""],["trace","Define trace macro that specify libra as the target"],["warn","Define warn macro that specify libra as the target"]],"mod":[["counters",""],["json_log",""],["prelude",""]],"struct":[["Logger","Logging framework for Libra that encapsulates a minimal dependency logger with support for environmental variable (RUST_LOG) and asynchronous logging. Note: only a single logger can be instantiated at a time. Repeated instantiates of the loggers will only adjust the global logging level but will not change the initial filter."],["LoggingField","Field is similar to .data but restricts type of the value to a specific type."],["StructuredLogEntry",""]],"trait":[["StructLogSink",""]]});