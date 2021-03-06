/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import {
  isPayloadMappingsSupported
} from '../../helper/PayloadMappingsHelper';

import cmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper';

import utils from 'bpmn-js-properties-panel/lib/Utils';

import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

function ensurePayloadMappingsSupported(element) {
  return isPayloadMappingsSupported(element);
}

export default function(element, bpmnFactory, options = {}) {
  const idPrefix = options.idPrefix || '';

  const getSelected = options.getSelectedMapping;

  if (!ensurePayloadMappingsSupported(element)) {
    return [];
  }

  const entries = [];

  const isSelected = (element, node) => {
    return getSelected(element, node);
  };


  // parameter source ////////////////////////////////////////////////////////

  entries.push(entryFactory.validationAwareTextField({
    id: `${idPrefix}mappingSource`,
    label: 'Source',
    modelProperty: 'source',

    getProperty: function(element, node) {
      return (getSelected(element, node) || {}).source;
    },

    setProperty: function(element, values, node) {
      const param = getSelected(element, node);
      return cmdHelper.updateBusinessObject(element, param, values);
    },

    validate: function(element, values, node) {
      const bo = getSelected(element, node);

      const validation = {};
      if (bo) {
        const sourceValue = values.source;

        if (sourceValue) {
          if (utils.containsSpace(sourceValue)) {
            validation.source = 'Source must not contain spaces';
          }
        }
        else {
          validation.source = 'Mapping must have a source';
        }
      }

      return validation;
    },

    disabled: function(element, node) {
      return !isSelected(element, node);
    }
  }));


  // parameter target ////////////////////////////////////////////////////////

  entries.push(entryFactory.validationAwareTextField({
    id: `${idPrefix}mappingTarget`,
    label: 'Target',
    modelProperty: 'target',

    getProperty: function(element, node) {
      return (getSelected(element, node) || {}).target;
    },

    setProperty: function(element, values, node) {
      const param = getSelected(element, node);
      return cmdHelper.updateBusinessObject(element, param, values);
    },

    validate: function(element, values, node) {
      const bo = getSelected(element, node);

      const validation = {};
      if (bo) {
        const targetValue = values.target;

        if (targetValue) {
          if (utils.containsSpace(targetValue)) {
            validation.target = 'Target must not contain spaces';
          }
        }
        else {
          validation.target = 'Mapping must have a Target';
        }
      }

      return validation;
    },

    disabled: function(element, node) {
      return !isSelected(element, node);
    }
  }));

  entries.push(entryFactory.selectBox({
    id: 'mapping-type',
    label: 'Type',
    selectOptions: [
      { name: 'PUT', value: 'PUT' },
      { name: 'COLLECT', value: 'COLLECT' }
    ],
    modelProperty: 'type',
    emptyParameter: false,

    get: function(element, node) {
      return (getSelected(element, node) || {});
    },

    set: function(element, values, node) {

      const param = getSelected(element, node);
      return cmdHelper.updateBusinessObject(element, param, values);
    }
  }));

  return entries;
}
