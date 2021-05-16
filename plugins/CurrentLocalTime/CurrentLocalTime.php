<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\CurrentLocalTime;

class CurrentLocalTime extends \Piwik\Plugin
{
    public function registerEvents()
    {
        return [
            'CronArchive.getArchivingAPIMethodForPlugin' => 'getArchivingAPIMethodForPlugin',
            'AssetManager.getJavaScriptFiles' => 'getJavaScriptFiles',
            'AssetManager.getStylesheetFiles' => 'getStylesheetFiles',
        ];
    }

    // support archiving just this plugin via core:archive
    public function getArchivingAPIMethodForPlugin(&$method, $plugin)
    {
        if ($plugin == 'CurrentLocalTime') {
            $method = 'CurrentLocalTime.getExampleArchivedMetric';
        }
    }

    public function getJavaScriptFiles(&$files)
    {
        $files[] = "plugins/CurrentLocalTime/javascripts/current-local-time.js";
    }

    public function getStylesheetFiles(&$files)
    {
        $files[] = "plugins/CurrentLocalTime/stylesheets/current-local-time.css";
    }
}