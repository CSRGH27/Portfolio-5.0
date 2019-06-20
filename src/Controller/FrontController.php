<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\SkillRepository;

class FrontController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home(SkillRepository $repo)
    {
        $skill = $repo->findAll();

        return $this->render('front/index.html.twig',[
            'controller_name' => 'PortfolioController',
            'skills' => $skill,
        ]);
    }
}
