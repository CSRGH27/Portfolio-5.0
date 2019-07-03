<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\SkillRepository;
use App\Repository\ExperienceRepository;
use App\Entity\Skill;
use App\Entity\Experience;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Project;

class FrontController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(Request $request, ObjectManager $manager)
    {
        $skill = $this->getDoctrine()->getRepository(Skill::class)->findAll();
        $exp = $this->getDoctrine()->getRepository(Experience::class)->findAll();
        $project = $this->getDoctrine()->getRepository(Project::class)->findAll();

        return $this->render('front/index.html.twig',[
            'skills' => $skill,
            'exps' => $exp,
            'projects' => $project,
        ]);
    }

    /**
     *  @Route("/{id}", name="project_show", options={"expose"=true})
     */
    public function show(Project $project){
        return $this->render('front/show.html.twig', [
            'project' => $project,
            
        ]);
    }




}
