/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

export const AVAILABLE_REPLACE_ELEMENTS = [
  'replace-with-service-task',
  'replace-with-message-intermediate-catch',
  'replace-with-timer-intermediate-catch',
  'replace-with-none-start',
  'replace-with-none-end',
  'replace-with-conditional-flow',
  'replace-with-default-flow',
  'replace-with-sequence-flow',
  'replace-with-parallel-gateway',
  'replace-with-exclusive-gateway',
  'replace-with-collapsed-subprocess',
  'replace-with-expanded-subprocess',
  'replace-with-timer-boundary',
  'replace-with-message-boundary',
  'replace-with-event-based-gateway',
  'replace-with-receive-task',
  'replace-with-message-start',
  'replace-with-timer-start',
  'replace-with-non-interrupting-message-boundary',
  'replace-with-non-interrupting-timer-boundary'
];

export const AVAILABLE_CONTEXTPAD_ENTRIES = [
  'append.end-event',
  'append.gateway',
  'delete',
  'connect',
  'replace'
];