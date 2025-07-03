"use strict";
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commonQueryParams = ['error_trace', 'filter_path', 'human', 'pretty'];
class Ml {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "acceptedParams", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
        this.acceptedParams = {
            'ml.clear_trained_model_deployment_cache': {
                path: [
                    'model_id'
                ],
                body: [],
                query: []
            },
            'ml.close_job': {
                path: [
                    'job_id'
                ],
                body: [
                    'allow_no_match',
                    'force',
                    'timeout'
                ],
                query: [
                    'allow_no_match',
                    'force',
                    'timeout'
                ]
            },
            'ml.delete_calendar': {
                path: [
                    'calendar_id'
                ],
                body: [],
                query: []
            },
            'ml.delete_calendar_event': {
                path: [
                    'calendar_id',
                    'event_id'
                ],
                body: [],
                query: []
            },
            'ml.delete_calendar_job': {
                path: [
                    'calendar_id',
                    'job_id'
                ],
                body: [],
                query: []
            },
            'ml.delete_data_frame_analytics': {
                path: [
                    'id'
                ],
                body: [],
                query: [
                    'force',
                    'timeout'
                ]
            },
            'ml.delete_datafeed': {
                path: [
                    'datafeed_id'
                ],
                body: [],
                query: [
                    'force'
                ]
            },
            'ml.delete_expired_data': {
                path: [
                    'job_id'
                ],
                body: [
                    'requests_per_second',
                    'timeout'
                ],
                query: [
                    'requests_per_second',
                    'timeout'
                ]
            },
            'ml.delete_filter': {
                path: [
                    'filter_id'
                ],
                body: [],
                query: []
            },
            'ml.delete_forecast': {
                path: [
                    'job_id',
                    'forecast_id'
                ],
                body: [],
                query: [
                    'allow_no_forecasts',
                    'timeout'
                ]
            },
            'ml.delete_job': {
                path: [
                    'job_id'
                ],
                body: [],
                query: [
                    'force',
                    'delete_user_annotations',
                    'wait_for_completion'
                ]
            },
            'ml.delete_model_snapshot': {
                path: [
                    'job_id',
                    'snapshot_id'
                ],
                body: [],
                query: []
            },
            'ml.delete_trained_model': {
                path: [
                    'model_id'
                ],
                body: [],
                query: [
                    'force',
                    'timeout'
                ]
            },
            'ml.delete_trained_model_alias': {
                path: [
                    'model_alias',
                    'model_id'
                ],
                body: [],
                query: []
            },
            'ml.estimate_model_memory': {
                path: [],
                body: [
                    'analysis_config',
                    'max_bucket_cardinality',
                    'overall_cardinality'
                ],
                query: []
            },
            'ml.evaluate_data_frame': {
                path: [],
                body: [
                    'evaluation',
                    'index',
                    'query'
                ],
                query: []
            },
            'ml.explain_data_frame_analytics': {
                path: [
                    'id'
                ],
                body: [
                    'source',
                    'dest',
                    'analysis',
                    'description',
                    'model_memory_limit',
                    'max_num_threads',
                    'analyzed_fields',
                    'allow_lazy_start'
                ],
                query: []
            },
            'ml.flush_job': {
                path: [
                    'job_id'
                ],
                body: [
                    'advance_time',
                    'calc_interim',
                    'end',
                    'skip_time',
                    'start'
                ],
                query: [
                    'advance_time',
                    'calc_interim',
                    'end',
                    'skip_time',
                    'start'
                ]
            },
            'ml.forecast': {
                path: [
                    'job_id'
                ],
                body: [
                    'duration',
                    'expires_in',
                    'max_model_memory'
                ],
                query: [
                    'duration',
                    'expires_in',
                    'max_model_memory'
                ]
            },
            'ml.get_buckets': {
                path: [
                    'job_id',
                    'timestamp'
                ],
                body: [
                    'anomaly_score',
                    'desc',
                    'end',
                    'exclude_interim',
                    'expand',
                    'page',
                    'sort',
                    'start'
                ],
                query: [
                    'anomaly_score',
                    'desc',
                    'end',
                    'exclude_interim',
                    'expand',
                    'from',
                    'size',
                    'sort',
                    'start'
                ]
            },
            'ml.get_calendar_events': {
                path: [
                    'calendar_id'
                ],
                body: [],
                query: [
                    'end',
                    'from',
                    'job_id',
                    'size',
                    'start'
                ]
            },
            'ml.get_calendars': {
                path: [
                    'calendar_id'
                ],
                body: [
                    'page'
                ],
                query: [
                    'from',
                    'size'
                ]
            },
            'ml.get_categories': {
                path: [
                    'job_id',
                    'category_id'
                ],
                body: [
                    'page'
                ],
                query: [
                    'from',
                    'partition_field_value',
                    'size'
                ]
            },
            'ml.get_data_frame_analytics': {
                path: [
                    'id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'from',
                    'size',
                    'exclude_generated'
                ]
            },
            'ml.get_data_frame_analytics_stats': {
                path: [
                    'id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'from',
                    'size',
                    'verbose'
                ]
            },
            'ml.get_datafeed_stats': {
                path: [
                    'datafeed_id'
                ],
                body: [],
                query: [
                    'allow_no_match'
                ]
            },
            'ml.get_datafeeds': {
                path: [
                    'datafeed_id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'exclude_generated'
                ]
            },
            'ml.get_filters': {
                path: [
                    'filter_id'
                ],
                body: [],
                query: [
                    'from',
                    'size'
                ]
            },
            'ml.get_influencers': {
                path: [
                    'job_id'
                ],
                body: [
                    'page'
                ],
                query: [
                    'desc',
                    'end',
                    'exclude_interim',
                    'influencer_score',
                    'from',
                    'size',
                    'sort',
                    'start'
                ]
            },
            'ml.get_job_stats': {
                path: [
                    'job_id'
                ],
                body: [],
                query: [
                    'allow_no_match'
                ]
            },
            'ml.get_jobs': {
                path: [
                    'job_id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'exclude_generated'
                ]
            },
            'ml.get_memory_stats': {
                path: [
                    'node_id'
                ],
                body: [],
                query: [
                    'master_timeout',
                    'timeout'
                ]
            },
            'ml.get_model_snapshot_upgrade_stats': {
                path: [
                    'job_id',
                    'snapshot_id'
                ],
                body: [],
                query: [
                    'allow_no_match'
                ]
            },
            'ml.get_model_snapshots': {
                path: [
                    'job_id',
                    'snapshot_id'
                ],
                body: [
                    'desc',
                    'end',
                    'page',
                    'sort',
                    'start'
                ],
                query: [
                    'desc',
                    'end',
                    'from',
                    'size',
                    'sort',
                    'start'
                ]
            },
            'ml.get_overall_buckets': {
                path: [
                    'job_id'
                ],
                body: [
                    'allow_no_match',
                    'bucket_span',
                    'end',
                    'exclude_interim',
                    'overall_score',
                    'start',
                    'top_n'
                ],
                query: [
                    'allow_no_match',
                    'bucket_span',
                    'end',
                    'exclude_interim',
                    'overall_score',
                    'start',
                    'top_n'
                ]
            },
            'ml.get_records': {
                path: [
                    'job_id'
                ],
                body: [
                    'desc',
                    'end',
                    'exclude_interim',
                    'page',
                    'record_score',
                    'sort',
                    'start'
                ],
                query: [
                    'desc',
                    'end',
                    'exclude_interim',
                    'from',
                    'record_score',
                    'size',
                    'sort',
                    'start'
                ]
            },
            'ml.get_trained_models': {
                path: [
                    'model_id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'decompress_definition',
                    'exclude_generated',
                    'from',
                    'include',
                    'size',
                    'tags'
                ]
            },
            'ml.get_trained_models_stats': {
                path: [
                    'model_id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'from',
                    'size'
                ]
            },
            'ml.infer_trained_model': {
                path: [
                    'model_id'
                ],
                body: [
                    'docs',
                    'inference_config'
                ],
                query: [
                    'timeout'
                ]
            },
            'ml.info': {
                path: [],
                body: [],
                query: []
            },
            'ml.open_job': {
                path: [
                    'job_id'
                ],
                body: [
                    'timeout'
                ],
                query: [
                    'timeout'
                ]
            },
            'ml.post_calendar_events': {
                path: [
                    'calendar_id'
                ],
                body: [
                    'events'
                ],
                query: []
            },
            'ml.post_data': {
                path: [
                    'job_id'
                ],
                body: [
                    'data'
                ],
                query: [
                    'reset_end',
                    'reset_start'
                ]
            },
            'ml.preview_data_frame_analytics': {
                path: [
                    'id'
                ],
                body: [
                    'config'
                ],
                query: []
            },
            'ml.preview_datafeed': {
                path: [
                    'datafeed_id'
                ],
                body: [
                    'datafeed_config',
                    'job_config'
                ],
                query: [
                    'start',
                    'end'
                ]
            },
            'ml.put_calendar': {
                path: [
                    'calendar_id'
                ],
                body: [
                    'job_ids',
                    'description'
                ],
                query: []
            },
            'ml.put_calendar_job': {
                path: [
                    'calendar_id',
                    'job_id'
                ],
                body: [],
                query: []
            },
            'ml.put_data_frame_analytics': {
                path: [
                    'id'
                ],
                body: [
                    'allow_lazy_start',
                    'analysis',
                    'analyzed_fields',
                    'description',
                    'dest',
                    'max_num_threads',
                    '_meta',
                    'model_memory_limit',
                    'source',
                    'headers',
                    'version'
                ],
                query: []
            },
            'ml.put_datafeed': {
                path: [
                    'datafeed_id'
                ],
                body: [
                    'aggregations',
                    'aggs',
                    'chunking_config',
                    'delayed_data_check_config',
                    'frequency',
                    'indices',
                    'indexes',
                    'indices_options',
                    'job_id',
                    'max_empty_searches',
                    'query',
                    'query_delay',
                    'runtime_mappings',
                    'script_fields',
                    'scroll_size',
                    'headers'
                ],
                query: [
                    'allow_no_indices',
                    'expand_wildcards',
                    'ignore_throttled',
                    'ignore_unavailable'
                ]
            },
            'ml.put_filter': {
                path: [
                    'filter_id'
                ],
                body: [
                    'description',
                    'items'
                ],
                query: []
            },
            'ml.put_job': {
                path: [],
                body: [
                    'allow_lazy_open',
                    'analysis_config',
                    'analysis_limits',
                    'background_persist_interval',
                    'custom_settings',
                    'daily_model_snapshot_retention_after_days',
                    'data_description',
                    'datafeed_config',
                    'description',
                    'job_id',
                    'groups',
                    'model_plot_config',
                    'model_snapshot_retention_days',
                    'renormalization_window_days',
                    'results_index_name',
                    'results_retention_days'
                ],
                query: [
                    'allow_no_indices',
                    'expand_wildcards',
                    'ignore_throttled',
                    'ignore_unavailable'
                ]
            },
            'ml.put_trained_model': {
                path: [
                    'model_id'
                ],
                body: [
                    'compressed_definition',
                    'definition',
                    'description',
                    'inference_config',
                    'input',
                    'metadata',
                    'model_type',
                    'model_size_bytes',
                    'platform_architecture',
                    'tags',
                    'prefix_strings'
                ],
                query: [
                    'defer_definition_decompression',
                    'wait_for_completion'
                ]
            },
            'ml.put_trained_model_alias': {
                path: [
                    'model_alias',
                    'model_id'
                ],
                body: [],
                query: [
                    'reassign'
                ]
            },
            'ml.put_trained_model_definition_part': {
                path: [
                    'model_id',
                    'part'
                ],
                body: [
                    'definition',
                    'total_definition_length',
                    'total_parts'
                ],
                query: []
            },
            'ml.put_trained_model_vocabulary': {
                path: [
                    'model_id'
                ],
                body: [
                    'vocabulary',
                    'merges',
                    'scores'
                ],
                query: []
            },
            'ml.reset_job': {
                path: [
                    'job_id'
                ],
                body: [],
                query: [
                    'wait_for_completion',
                    'delete_user_annotations'
                ]
            },
            'ml.revert_model_snapshot': {
                path: [
                    'job_id',
                    'snapshot_id'
                ],
                body: [
                    'delete_intervening_results'
                ],
                query: [
                    'delete_intervening_results'
                ]
            },
            'ml.set_upgrade_mode': {
                path: [],
                body: [],
                query: [
                    'enabled',
                    'timeout'
                ]
            },
            'ml.start_data_frame_analytics': {
                path: [
                    'id'
                ],
                body: [],
                query: [
                    'timeout'
                ]
            },
            'ml.start_datafeed': {
                path: [
                    'datafeed_id'
                ],
                body: [
                    'end',
                    'start',
                    'timeout'
                ],
                query: [
                    'end',
                    'start',
                    'timeout'
                ]
            },
            'ml.start_trained_model_deployment': {
                path: [
                    'model_id'
                ],
                body: [
                    'adaptive_allocations'
                ],
                query: [
                    'cache_size',
                    'deployment_id',
                    'number_of_allocations',
                    'priority',
                    'queue_capacity',
                    'threads_per_allocation',
                    'timeout',
                    'wait_for'
                ]
            },
            'ml.stop_data_frame_analytics': {
                path: [
                    'id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'force',
                    'timeout'
                ]
            },
            'ml.stop_datafeed': {
                path: [
                    'datafeed_id'
                ],
                body: [
                    'allow_no_match',
                    'force',
                    'timeout'
                ],
                query: [
                    'allow_no_match',
                    'force',
                    'timeout'
                ]
            },
            'ml.stop_trained_model_deployment': {
                path: [
                    'model_id'
                ],
                body: [],
                query: [
                    'allow_no_match',
                    'force'
                ]
            },
            'ml.update_data_frame_analytics': {
                path: [
                    'id'
                ],
                body: [
                    'description',
                    'model_memory_limit',
                    'max_num_threads',
                    'allow_lazy_start'
                ],
                query: []
            },
            'ml.update_datafeed': {
                path: [
                    'datafeed_id'
                ],
                body: [
                    'aggregations',
                    'chunking_config',
                    'delayed_data_check_config',
                    'frequency',
                    'indices',
                    'indexes',
                    'indices_options',
                    'job_id',
                    'max_empty_searches',
                    'query',
                    'query_delay',
                    'runtime_mappings',
                    'script_fields',
                    'scroll_size'
                ],
                query: [
                    'allow_no_indices',
                    'expand_wildcards',
                    'ignore_throttled',
                    'ignore_unavailable'
                ]
            },
            'ml.update_filter': {
                path: [
                    'filter_id'
                ],
                body: [
                    'add_items',
                    'description',
                    'remove_items'
                ],
                query: []
            },
            'ml.update_job': {
                path: [
                    'job_id'
                ],
                body: [
                    'allow_lazy_open',
                    'analysis_limits',
                    'background_persist_interval',
                    'custom_settings',
                    'categorization_filters',
                    'description',
                    'model_plot_config',
                    'model_prune_window',
                    'daily_model_snapshot_retention_after_days',
                    'model_snapshot_retention_days',
                    'renormalization_window_days',
                    'results_retention_days',
                    'groups',
                    'detectors',
                    'per_partition_categorization'
                ],
                query: []
            },
            'ml.update_model_snapshot': {
                path: [
                    'job_id',
                    'snapshot_id'
                ],
                body: [
                    'description',
                    'retain'
                ],
                query: []
            },
            'ml.update_trained_model_deployment': {
                path: [
                    'model_id'
                ],
                body: [
                    'number_of_allocations',
                    'adaptive_allocations'
                ],
                query: [
                    'number_of_allocations'
                ]
            },
            'ml.upgrade_job_snapshot': {
                path: [
                    'job_id',
                    'snapshot_id'
                ],
                body: [],
                query: [
                    'wait_for_completion',
                    'timeout'
                ]
            },
            'ml.validate': {
                path: [],
                body: [
                    'job_id',
                    'analysis_config',
                    'analysis_limits',
                    'data_description',
                    'description',
                    'model_plot',
                    'model_snapshot_id',
                    'model_snapshot_retention_days',
                    'results_index_name'
                ],
                query: []
            },
            'ml.validate_detector': {
                path: [],
                body: [
                    'detector'
                ],
                query: []
            }
        };
    }
    async clearTrainedModelDeploymentCache(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.clear_trained_model_deployment_cache'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/deployment/cache/_clear`;
        const meta = {
            name: 'ml.clear_trained_model_deployment_cache',
            pathParts: {
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async closeJob(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.close_job'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_close`;
        const meta = {
            name: 'ml.close_job',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteCalendar(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_calendar'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}`;
        const meta = {
            name: 'ml.delete_calendar',
            pathParts: {
                calendar_id: params.calendar_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteCalendarEvent(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_calendar_event'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}/events/${encodeURIComponent(params.event_id.toString())}`;
        const meta = {
            name: 'ml.delete_calendar_event',
            pathParts: {
                calendar_id: params.calendar_id,
                event_id: params.event_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteCalendarJob(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_calendar_job'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}/jobs/${encodeURIComponent(params.job_id.toString())}`;
        const meta = {
            name: 'ml.delete_calendar_job',
            pathParts: {
                calendar_id: params.calendar_id,
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteDataFrameAnalytics(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_data_frame_analytics'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'ml.delete_data_frame_analytics',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteDatafeed(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_datafeed'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}`;
        const meta = {
            name: 'ml.delete_datafeed',
            pathParts: {
                datafeed_id: params.datafeed_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteExpiredData(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.delete_expired_data'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        let method = '';
        let path = '';
        if (params.job_id != null) {
            method = 'DELETE';
            path = `/_ml/_delete_expired_data/${encodeURIComponent(params.job_id.toString())}`;
        }
        else {
            method = 'DELETE';
            path = '/_ml/_delete_expired_data';
        }
        const meta = {
            name: 'ml.delete_expired_data',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteFilter(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_filter'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_ml/filters/${encodeURIComponent(params.filter_id.toString())}`;
        const meta = {
            name: 'ml.delete_filter',
            pathParts: {
                filter_id: params.filter_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteForecast(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_forecast'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.job_id != null && params.forecast_id != null) {
            method = 'DELETE';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_forecast/${encodeURIComponent(params.forecast_id.toString())}`;
        }
        else {
            method = 'DELETE';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_forecast`;
        }
        const meta = {
            name: 'ml.delete_forecast',
            pathParts: {
                job_id: params.job_id,
                forecast_id: params.forecast_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteJob(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_job'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}`;
        const meta = {
            name: 'ml.delete_job',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteModelSnapshot(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_model_snapshot'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}`;
        const meta = {
            name: 'ml.delete_model_snapshot',
            pathParts: {
                job_id: params.job_id,
                snapshot_id: params.snapshot_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteTrainedModel(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_trained_model'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}`;
        const meta = {
            name: 'ml.delete_trained_model',
            pathParts: {
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async deleteTrainedModelAlias(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.delete_trained_model_alias'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/model_aliases/${encodeURIComponent(params.model_alias.toString())}`;
        const meta = {
            name: 'ml.delete_trained_model_alias',
            pathParts: {
                model_alias: params.model_alias,
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async estimateModelMemory(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.estimate_model_memory'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = '/_ml/anomaly_detectors/_estimate_model_memory';
        const meta = {
            name: 'ml.estimate_model_memory'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async evaluateDataFrame(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.evaluate_data_frame'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = '/_ml/data_frame/_evaluate';
        const meta = {
            name: 'ml.evaluate_data_frame'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async explainDataFrameAnalytics(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.explain_data_frame_analytics'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        let method = '';
        let path = '';
        if (params.id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_explain`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_ml/data_frame/analytics/_explain';
        }
        const meta = {
            name: 'ml.explain_data_frame_analytics',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async flushJob(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.flush_job'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_flush`;
        const meta = {
            name: 'ml.flush_job',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async forecast(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.forecast'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_forecast`;
        const meta = {
            name: 'ml.forecast',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getBuckets(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.get_buckets'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        let method = '';
        let path = '';
        if (params.job_id != null && params.timestamp != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/buckets/${encodeURIComponent(params.timestamp.toString())}`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/buckets`;
        }
        const meta = {
            name: 'ml.get_buckets',
            pathParts: {
                job_id: params.job_id,
                timestamp: params.timestamp
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getCalendarEvents(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_calendar_events'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}/events`;
        const meta = {
            name: 'ml.get_calendar_events',
            pathParts: {
                calendar_id: params.calendar_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getCalendars(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.get_calendars'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        let method = '';
        let path = '';
        if (params.calendar_id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_ml/calendars';
        }
        const meta = {
            name: 'ml.get_calendars',
            pathParts: {
                calendar_id: params.calendar_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getCategories(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.get_categories'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        let method = '';
        let path = '';
        if (params.job_id != null && params.category_id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/categories/${encodeURIComponent(params.category_id.toString())}`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/categories`;
        }
        const meta = {
            name: 'ml.get_categories',
            pathParts: {
                job_id: params.job_id,
                category_id: params.category_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getDataFrameAnalytics(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_data_frame_analytics'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.id != null) {
            method = 'GET';
            path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ml/data_frame/analytics';
        }
        const meta = {
            name: 'ml.get_data_frame_analytics',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getDataFrameAnalyticsStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_data_frame_analytics_stats'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.id != null) {
            method = 'GET';
            path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_ml/data_frame/analytics/_stats';
        }
        const meta = {
            name: 'ml.get_data_frame_analytics_stats',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getDatafeedStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_datafeed_stats'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.datafeed_id != null) {
            method = 'GET';
            path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_ml/datafeeds/_stats';
        }
        const meta = {
            name: 'ml.get_datafeed_stats',
            pathParts: {
                datafeed_id: params.datafeed_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getDatafeeds(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_datafeeds'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.datafeed_id != null) {
            method = 'GET';
            path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ml/datafeeds';
        }
        const meta = {
            name: 'ml.get_datafeeds',
            pathParts: {
                datafeed_id: params.datafeed_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getFilters(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_filters'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.filter_id != null) {
            method = 'GET';
            path = `/_ml/filters/${encodeURIComponent(params.filter_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ml/filters';
        }
        const meta = {
            name: 'ml.get_filters',
            pathParts: {
                filter_id: params.filter_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getInfluencers(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.get_influencers'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = body != null ? 'POST' : 'GET';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/influencers`;
        const meta = {
            name: 'ml.get_influencers',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getJobStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_job_stats'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.job_id != null) {
            method = 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_ml/anomaly_detectors/_stats';
        }
        const meta = {
            name: 'ml.get_job_stats',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getJobs(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_jobs'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.job_id != null) {
            method = 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ml/anomaly_detectors';
        }
        const meta = {
            name: 'ml.get_jobs',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getMemoryStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_memory_stats'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.node_id != null) {
            method = 'GET';
            path = `/_ml/memory/${encodeURIComponent(params.node_id.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_ml/memory/_stats';
        }
        const meta = {
            name: 'ml.get_memory_stats',
            pathParts: {
                node_id: params.node_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getModelSnapshotUpgradeStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_model_snapshot_upgrade_stats'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}/_upgrade/_stats`;
        const meta = {
            name: 'ml.get_model_snapshot_upgrade_stats',
            pathParts: {
                job_id: params.job_id,
                snapshot_id: params.snapshot_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getModelSnapshots(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.get_model_snapshots'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        let method = '';
        let path = '';
        if (params.job_id != null && params.snapshot_id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots`;
        }
        const meta = {
            name: 'ml.get_model_snapshots',
            pathParts: {
                job_id: params.job_id,
                snapshot_id: params.snapshot_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getOverallBuckets(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.get_overall_buckets'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = body != null ? 'POST' : 'GET';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/overall_buckets`;
        const meta = {
            name: 'ml.get_overall_buckets',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getRecords(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.get_records'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = body != null ? 'POST' : 'GET';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/records`;
        const meta = {
            name: 'ml.get_records',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getTrainedModels(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_trained_models'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.model_id != null) {
            method = 'GET';
            path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ml/trained_models';
        }
        const meta = {
            name: 'ml.get_trained_models',
            pathParts: {
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async getTrainedModelsStats(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.get_trained_models_stats'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.model_id != null) {
            method = 'GET';
            path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_ml/trained_models/_stats';
        }
        const meta = {
            name: 'ml.get_trained_models_stats',
            pathParts: {
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async inferTrainedModel(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.infer_trained_model'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/_infer`;
        const meta = {
            name: 'ml.infer_trained_model',
            pathParts: {
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async info(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.info'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_ml/info';
        const meta = {
            name: 'ml.info'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async openJob(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.open_job'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_open`;
        const meta = {
            name: 'ml.open_job',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async postCalendarEvents(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.post_calendar_events'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}/events`;
        const meta = {
            name: 'ml.post_calendar_events',
            pathParts: {
                calendar_id: params.calendar_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async postData(params, options) {
        var _a;
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.post_data'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body = (_a = params.body) !== null && _a !== void 0 ? _a : undefined;
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                // @ts-expect-error
                body = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_data`;
        const meta = {
            name: 'ml.post_data',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, bulkBody: body, meta }, options);
    }
    async previewDataFrameAnalytics(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.preview_data_frame_analytics'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        let method = '';
        let path = '';
        if (params.id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_preview`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_ml/data_frame/analytics/_preview';
        }
        const meta = {
            name: 'ml.preview_data_frame_analytics',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async previewDatafeed(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.preview_datafeed'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        let method = '';
        let path = '';
        if (params.datafeed_id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}/_preview`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_ml/datafeeds/_preview';
        }
        const meta = {
            name: 'ml.preview_datafeed',
            pathParts: {
                datafeed_id: params.datafeed_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putCalendar(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.put_calendar'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'PUT';
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}`;
        const meta = {
            name: 'ml.put_calendar',
            pathParts: {
                calendar_id: params.calendar_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putCalendarJob(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.put_calendar_job'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}/jobs/${encodeURIComponent(params.job_id.toString())}`;
        const meta = {
            name: 'ml.put_calendar_job',
            pathParts: {
                calendar_id: params.calendar_id,
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putDataFrameAnalytics(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.put_data_frame_analytics'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'PUT';
        const path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}`;
        const meta = {
            name: 'ml.put_data_frame_analytics',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putDatafeed(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.put_datafeed'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'PUT';
        const path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}`;
        const meta = {
            name: 'ml.put_datafeed',
            pathParts: {
                datafeed_id: params.datafeed_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putFilter(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.put_filter'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'PUT';
        const path = `/_ml/filters/${encodeURIComponent(params.filter_id.toString())}`;
        const meta = {
            name: 'ml.put_filter',
            pathParts: {
                filter_id: params.filter_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putJob(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.put_job'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'PUT';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}`;
        const meta = {
            name: 'ml.put_job',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putTrainedModel(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.put_trained_model'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'PUT';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}`;
        const meta = {
            name: 'ml.put_trained_model',
            pathParts: {
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putTrainedModelAlias(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.put_trained_model_alias'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/model_aliases/${encodeURIComponent(params.model_alias.toString())}`;
        const meta = {
            name: 'ml.put_trained_model_alias',
            pathParts: {
                model_alias: params.model_alias,
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putTrainedModelDefinitionPart(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.put_trained_model_definition_part'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'PUT';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/definition/${encodeURIComponent(params.part.toString())}`;
        const meta = {
            name: 'ml.put_trained_model_definition_part',
            pathParts: {
                model_id: params.model_id,
                part: params.part
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async putTrainedModelVocabulary(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.put_trained_model_vocabulary'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'PUT';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/vocabulary`;
        const meta = {
            name: 'ml.put_trained_model_vocabulary',
            pathParts: {
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async resetJob(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.reset_job'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_reset`;
        const meta = {
            name: 'ml.reset_job',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async revertModelSnapshot(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.revert_model_snapshot'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}/_revert`;
        const meta = {
            name: 'ml.revert_model_snapshot',
            pathParts: {
                job_id: params.job_id,
                snapshot_id: params.snapshot_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async setUpgradeMode(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.set_upgrade_mode'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_ml/set_upgrade_mode';
        const meta = {
            name: 'ml.set_upgrade_mode'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async startDataFrameAnalytics(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.start_data_frame_analytics'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_start`;
        const meta = {
            name: 'ml.start_data_frame_analytics',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async startDatafeed(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.start_datafeed'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}/_start`;
        const meta = {
            name: 'ml.start_datafeed',
            pathParts: {
                datafeed_id: params.datafeed_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async startTrainedModelDeployment(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.start_trained_model_deployment'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/deployment/_start`;
        const meta = {
            name: 'ml.start_trained_model_deployment',
            pathParts: {
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stopDataFrameAnalytics(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.stop_data_frame_analytics'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_stop`;
        const meta = {
            name: 'ml.stop_data_frame_analytics',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stopDatafeed(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.stop_datafeed'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}/_stop`;
        const meta = {
            name: 'ml.stop_datafeed',
            pathParts: {
                datafeed_id: params.datafeed_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async stopTrainedModelDeployment(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.stop_trained_model_deployment'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/deployment/_stop`;
        const meta = {
            name: 'ml.stop_trained_model_deployment',
            pathParts: {
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateDataFrameAnalytics(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.update_data_frame_analytics'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_update`;
        const meta = {
            name: 'ml.update_data_frame_analytics',
            pathParts: {
                id: params.id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateDatafeed(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.update_datafeed'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}/_update`;
        const meta = {
            name: 'ml.update_datafeed',
            pathParts: {
                datafeed_id: params.datafeed_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateFilter(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.update_filter'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/filters/${encodeURIComponent(params.filter_id.toString())}/_update`;
        const meta = {
            name: 'ml.update_filter',
            pathParts: {
                filter_id: params.filter_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateJob(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.update_job'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_update`;
        const meta = {
            name: 'ml.update_job',
            pathParts: {
                job_id: params.job_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateModelSnapshot(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.update_model_snapshot'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}/_update`;
        const meta = {
            name: 'ml.update_model_snapshot',
            pathParts: {
                job_id: params.job_id,
                snapshot_id: params.snapshot_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async updateTrainedModelDeployment(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.update_trained_model_deployment'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/deployment/_update`;
        const meta = {
            name: 'ml.update_trained_model_deployment',
            pathParts: {
                model_id: params.model_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async upgradeJobSnapshot(params, options) {
        const { path: acceptedPath } = this.acceptedParams['ml.upgrade_job_snapshot'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}/_upgrade`;
        const meta = {
            name: 'ml.upgrade_job_snapshot',
            pathParts: {
                job_id: params.job_id,
                snapshot_id: params.snapshot_id
            }
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async validate(params, options) {
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.validate'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body;
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        if (userBody != null) {
            if (typeof userBody === 'string') {
                body = userBody;
            }
            else {
                body = { ...userBody };
            }
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = '/_ml/anomaly_detectors/_validate';
        const meta = {
            name: 'ml.validate'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
    async validateDetector(params, options) {
        var _a;
        const { path: acceptedPath, body: acceptedBody, query: acceptedQuery } = this.acceptedParams['ml.validate_detector'];
        const userQuery = params === null || params === void 0 ? void 0 : params.querystring;
        const querystring = userQuery != null ? { ...userQuery } : {};
        let body = (_a = params.body) !== null && _a !== void 0 ? _a : undefined;
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                // @ts-expect-error
                body = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body' && key !== 'querystring') {
                if (acceptedQuery.includes(key) || commonQueryParams.includes(key)) {
                    // @ts-expect-error
                    querystring[key] = params[key];
                }
                else {
                    body = body !== null && body !== void 0 ? body : {};
                    // @ts-expect-error
                    body[key] = params[key];
                }
            }
        }
        const method = 'POST';
        const path = '/_ml/anomaly_detectors/_validate/detector';
        const meta = {
            name: 'ml.validate_detector'
        };
        return await this.transport.request({ path, method, querystring, body, meta }, options);
    }
}
exports.default = Ml;
//# sourceMappingURL=ml.js.map