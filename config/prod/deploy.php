<?php

use EasyCorp\Bundle\EasyDeployBundle\Deployer\DefaultDeployer;

return new class extends DefaultDeployer
{
    private $deployDir = '/var/www/Portfolio-5.0';

    public function configure()
    {
        return $this->getConfigBuilder()
            ->server('django')
            ->deployDir($this->deployDir)
            ->symfonyEnvironment('prod')
            ->sharedFilesAndDirs(['var/log', '.env'])
            ->fixPermissionsWithAcl('debian')
            ->repositoryUrl('git@github.com:CSRGH27/Portfolio-5.0.git')
            ->repositoryBranch('master');
    }

    public function beforeStartingDeploy()
    {
    }

    public function beforeFinishingDeploy()
    {
        $this->runRemote('yarn install');
        $this->runRemote('yarn run encore production');
        $this->runRemote('sudo service php7.4-fpm restart');
    }
};
