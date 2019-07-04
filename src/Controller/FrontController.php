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
use App\Form\ContactType;




class FrontController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(Request $request, ObjectManager $manager, \Swift_Mailer $mailer)
    {
        $skill = $this->getDoctrine()->getRepository(Skill::class)->findAll();
        $exp = $this->getDoctrine()->getRepository(Experience::class)->findAll();
        $project = $this->getDoctrine()->getRepository(Project::class)->findAll();
        $form = $this->createForm(ContactType::class);

        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {

            $contactFormData = $form->getData();

            // do something interesting here

            $message = (new \Swift_Message('Porfolio'))
                ->setFrom($contactFormData['mail'])
                ->setTo('paulcsrgh@gmail.com')
                ->setBody(
                    
                    $contactFormData['content'],
                    
                    'text/plain'
                    
                );
            $mailer->send($message);


            
        }

        return $this->render('front/index.html.twig', [
            'skills' => $skill,
            'exps' => $exp,
            'projects' => $project,
            'form' => $form->createView(),
        ]);
    }

    /**
     *  @Route("/{id}", name="project_show", options={"expose"=true})
     */
    public function show(Project $project)
    {
        return $this->render('front/show.html.twig', [
            'project' => $project,

        ]);
    }

    // /**
    //  * @Route("/contact", name="contact")
    //  */
    // public function contact()
    // {
    //     $form = $this->createForm(ContactType::class);

    //     return $this->render('front/contact.html.twig',[
    //         'form' => $form->createView(),
    //     ]);

    // }
}
